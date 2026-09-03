"use client";

import { useEffect, useState } from "react";

import {
  buscarQuilometragemNaData,
  registrarEventoManutencao,
  processarSubstituicaoManutencao,
} from "@/services/maintenance.service";

interface MaintenanceEventModalProps {
  componentName: string;
  cycleId: string;
  componentId: string;
  onClose: () => void;
}

export default function MaintenanceEventModal({
  componentName,
  cycleId,
  componentId,
  onClose,
}: MaintenanceEventModalProps) {
  const [eventType, setEventType] = useState<
    "inspection" | "rotation" | "replacement"
  >("inspection");

  const [eventDate, setEventDate] = useState("2026-08-28");

  const [quilometragem, setQuilometragem] = useState<number | null>(
    null
  );

  const [calculandoKm, setCalculandoKm] = useState(false);
  const [reason, setReason] = useState("Desgaste");
  const [inspectionResult, setInspectionResult] =
    useState("Sem problemas");
  const [notes, setNotes] = useState("");
  const [salvando, setSalvando] = useState(false);

    useEffect(() => {
    async function calcularQuilometragem() {
      if (!eventDate) {
        setQuilometragem(null);
        return;
      }

      setCalculandoKm(true);

      const km = await buscarQuilometragemNaData(eventDate);

      setQuilometragem(km);
      setCalculandoKm(false);
    }

    calcularQuilometragem();
  }, [eventDate]);


  async function handleSalvar() {
    if (!eventDate || quilometragem === null) {
      return;
    }

    setSalvando(true);

    let sucesso = false;

    if (eventType === "replacement") {
      console.log(">>> INÍCIO SUBSTITUIÇÃO", {
        cycleId,
        eventDate,
        reason,
        notes,
      });

      const novoCycleId =
        await processarSubstituicaoManutencao(
          cycleId,
          eventDate,
          reason,
          notes || null
        );

      console.log(
        ">>> NOVO CYCLE ID:",
        novoCycleId
      );

      sucesso = novoCycleId !== null;
    } else {
      sucesso = await registrarEventoManutencao({
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
            <label htmlFor="event-date">
              Data
            </label>

            <input
              id="event-date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
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
                      ).toLocaleString("pt-BR")} km`
                    : "—"}
              </strong>

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

              <select
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
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

              <select
                id="inspection-result"
                value={inspectionResult}
                onChange={(e) =>
                  setInspectionResult(e.target.value)
                }
              >
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
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
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
            {salvando ? "Salvando..." : "Salvar"}
          </button>
        </div>

      </div>
    </div>
  );
}