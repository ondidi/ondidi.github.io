"use client";

import { useState } from "react";

interface MaintenanceEventModalProps {
  componentName: string;
  onClose: () => void;
}

export default function MaintenanceEventModal({
  componentName,
  onClose,
}: MaintenanceEventModalProps) {
  const [eventType, setEventType] = useState<
    "inspection" | "rotation" | "replacement"
  >("inspection");

  return (
    <div className="maintenance-modal-overlay">
      <div className="maintenance-modal">

        <div className="maintenance-modal-header">
          <div>
            <span>REGISTRAR EVENTO</span>
            <h2>{componentName}</h2>
          </div>

          <button
            type="button"
            className="maintenance-modal-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="maintenance-form">

          <div className="maintenance-form-field">
            <label htmlFor="event-date">
              Data
            </label>

            <input
              id="event-date"
              type="date"
              defaultValue="2026-08-28"
            />
          </div>

          <div className="maintenance-form-field">
            <label>Quilometragem</label>

            <div className="maintenance-km-readonly">
              <strong>67.874 km</strong>
              <span>
                calculada automaticamente pelas atividades
              </span>
            </div>
          </div>

          <fieldset className="maintenance-form-field">
            <legend>Tipo de evento</legend>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type"
                value="inspection"
                checked={eventType === "inspection"}
                onChange={() => setEventType("inspection")}
              />
              <span>Inspeção</span>
            </label>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type"
                value="rotation"
                checked={eventType === "rotation"}
                onChange={() => setEventType("rotation")}
              />
              <span>Rodízio</span>
            </label>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type"
                value="replacement"
                checked={eventType === "replacement"}
                onChange={() => setEventType("replacement")}
              />
              <span>Substituição</span>
            </label>
          </fieldset>

          {eventType === "rotation" && (
            <div className="maintenance-rotation-fields">

              <div className="maintenance-form-field">
                <label htmlFor="current-position">
                  Posição atual
                </label>

                <select id="current-position">
                  <option>Dianteiro</option>
                  <option>Traseiro</option>
                </select>
              </div>

              <div className="maintenance-form-field">
                <label htmlFor="new-position">
                  Nova posição
                </label>

                <select id="new-position">
                  <option>Traseiro</option>
                  <option>Dianteiro</option>
                </select>
              </div>

            </div>
          )}

          {eventType === "replacement" && (
            <div className="maintenance-form-field">
              <label htmlFor="reason">
                Motivo
              </label>

              <select id="reason">
                <option>Desgaste</option>
                <option>Dano</option>
                <option>Preventiva</option>
                <option>Outro</option>
              </select>
            </div>
          )}

          {eventType === "inspection" && (
            <div className="maintenance-form-field">
              <label htmlFor="inspection-result">
                Resultado da inspeção
              </label>

              <select id="inspection-result">
                <option>Sem problemas</option>
                <option>Atenção</option>
                <option>Necessita substituição</option>
              </select>
            </div>
          )}

          <div className="maintenance-form-field">
            <label htmlFor="notes">
              Observação
            </label>

            <textarea
              id="notes"
              rows={4}
              placeholder="Registre alguma informação importante..."
            />
          </div>

        </div>

        <div className="maintenance-modal-actions">
          <button
            type="button"
            className="maintenance-button-secondary"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="maintenance-button-primary"
            onClick={onClose}
          >
            Salvar
          </button>
        </div>

      </div>
    </div>
  );
}