"use client";

import { useEffect, useState } from "react";

import {
  buscarQuilometragemNaData,
  registrarEventoManutencao,
  processarSubstituicaoManutencao,
} from "@/services/maintenance.service";

interface MaintenanceEventModalCubosProps {
  componentName: string;
  cycleId: string;
  onClose: () => void;
}

export default function MaintenanceEventModalCubos({
  componentName,
  cycleId,
  onClose,
}: MaintenanceEventModalCubosProps) {
  const [eventType, setEventType] = useState<
    "inspection" | "repair" | "replacement"
  >("inspection");

  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [quilometragem, setQuilometragem] =
    useState<number | null>(null);

  const [calculandoKm, setCalculandoKm] =
    useState(false);

  const [inspectionResult, setInspectionResult] =
    useState("Sem problemas");

  const [notes, setNotes] = useState("");

  const [salvando, setSalvando] =
    useState(false);

  useEffect(() => {
    async function calcularQuilometragem() {
      if (!eventDate) {
        setQuilometragem(null);
        return;
      }

      setCalculandoKm(true);

      const km =
        await buscarQuilometragemNaData(
          eventDate
        );

      setQuilometragem(km);
      setCalculandoKm(false);
    }

    calcularQuilometragem();
  }, [eventDate]);

  async function handleSalvar() {
    if (
      !eventDate ||
      quilometragem === null
    ) {
      return;
    }

    setSalvando(true);

    let sucesso = false;

    if (eventType === "replacement") {
      const novoCycleId =
        await processarSubstituicaoManutencao(
          cycleId,
          eventDate,
          null,
          notes || null
        );

      sucesso = novoCycleId !== null;
    } else {
      sucesso =
        await registrarEventoManutencao({
          cycleId,
          eventDate,
          eventType,
          mileage: quilometragem,
          reason: null,
          inspectionResult:
            eventType === "inspection"
              ? inspectionResult
              : null,
          notes: notes || null,
        });
    }

    setSalvando(false);

    if (!sucesso) {
      return;
    }

    onClose();

    window.location.reload();
  }

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
            <label htmlFor="event-date-cubos">
              Data
            </label>

            <input
              id="event-date-cubos"
              type="date"
              value={eventDate}
              onChange={(e) =>
                setEventDate(e.target.value)
              }
            />
          </div>

          <div className="maintenance-form-field">
            <label>Quilometragem</label>

            <div className="maintenance-km-readonly">
              <strong>
                {calculandoKm
                  ? "Calculando..."
                  : quilometragem !== null
                    ? `${Math.round(
                        quilometragem
                      ).toLocaleString(
                        "pt-BR"
                      )} km`
                    : "—"}
              </strong>

              <span>
                calculada automaticamente
                pelas atividades
              </span>
            </div>
          </div>

          <fieldset className="maintenance-form-field">
            <legend>
              Tipo de evento
            </legend>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type-cubos"
                value="inspection"
                checked={
                  eventType === "inspection"
                }
                onChange={() =>
                  setEventType("inspection")
                }
              />

              <span>Inspeção</span>
            </label>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type-cubos"
                value="repair"
                checked={
                  eventType === "repair"
                }
                onChange={() =>
                  setEventType("repair")
                }
              />

              <span>Reparo</span>
            </label>

            <label className="maintenance-radio">
              <input
                type="radio"
                name="event-type-cubos"
                value="replacement"
                checked={
                  eventType === "replacement"
                }
                onChange={() =>
                  setEventType("replacement")
                }
              />

              <span>
                Substituição do cubo
              </span>
            </label>
          </fieldset>

          {eventType === "inspection" && (
            <div className="maintenance-form-field">
              <label htmlFor="inspection-result-cubos">
                Resultado da inspeção
              </label>

              <select
                id="inspection-result-cubos"
                value={inspectionResult}
                onChange={(e) =>
                  setInspectionResult(
                    e.target.value
                  )
                }
              >
                <option>
                  Sem problemas
                </option>

                <option>Atenção</option>

                <option>
                  Necessita manutenção
                </option>

                <option>
                  Necessita substituição
                </option>
              </select>
            </div>
          )}

          <div className="maintenance-form-field">
            <label htmlFor="notes-cubos">
              Observação
            </label>

            <textarea
              id="notes-cubos"
              rows={4}
              placeholder="Registre alguma informação importante..."
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
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
            onClick={handleSalvar}
            disabled={salvando}
          >
            {salvando
              ? "Salvando..."
              : "Salvar"}
          </button>

        </div>
      </div>
    </div>
  );
}