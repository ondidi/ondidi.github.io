"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

import styles from "./StatisticsAdmin.module.css";

type TipoAtividade = "pedalada" | "longao" | "aventura";
type Modalidade = "mtb" | "estrada" | "";
type Terreno = "terra" | "asfalto" | "trilha" | "";
type Dificuldade = "facil" | "moderada" | "dificil" | "";

interface FormData {
  tipo: TipoAtividade;
  data: string;
  modalidade: Modalidade;
  terreno: Terreno;
  distancia: string;
  duracao: string;
  calorias: string;
  ganhoElevacao: string;
  velocidadeMedia: string;
  fcMedia: string;
  local: string;
  nomeAventura: string;
  dificuldade: Dificuldade;
}

const initialForm: FormData = {
  tipo: "pedalada",
  data: "",
  modalidade: "",
  terreno: "",
  distancia: "",
  duracao: "",
  calorias: "",
  ganhoElevacao: "",
  velocidadeMedia: "",
  fcMedia: "",
  local: "",
  nomeAventura: "",
  dificuldade: "",
};

export default function StatisticsAdmin() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [mensagem, setMensagem] = useState("");

  function handleChange<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function converterNumero(valor: string) {
    if (!valor) return null;

    return Number(valor.replace(",", "."));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMensagem("Salvando...");

    const { error } = await supabase
      .from("atividades")
      .insert({
        tipo: form.tipo,
        data: form.data,
        local: form.local || null,
        modalidade: form.modalidade || null,
        terreno: form.terreno || null,
        distancia: form.distancia
          ? Number(form.distancia)
          : null,
        duracao: form.duracao
          ? form.duracao
          : null,
        calorias: form.calorias
          ? Number(form.calorias)
          : null,
        ganho_elevacao: form.ganhoElevacao
          ? Number(form.ganhoElevacao)
          : null,
        velocidade_media: form.velocidadeMedia
          ? Number(form.velocidadeMedia)
          : null,
          fc_media: form.fcMedia
          ? Number(form.fcMedia)
          : null,
        nome_aventura: form.nomeAventura || null,
        dificuldade: form.dificuldade || null,
        origem: "manual",
      });

    if (error) {
      console.error(
        "ERRO AO SALVAR ATIVIDADE:",
        error
      );

      setMensagem(
        "Não foi possível salvar a atividade."
      );

      return;
    }

    setMensagem("Atividade salva com sucesso!");

    setForm(initialForm);
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Estatísticas</h1>
          <p>Registrar atividade</p>
        </div>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        {/* TIPO DE ATIVIDADE */}

        <section className={styles.section}>
          <h2>Tipo de atividade</h2>

          <div className={styles.typeOptions}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="tipo"
                value="pedalada"
                checked={form.tipo === "pedalada"}
                onChange={() =>
                  handleChange("tipo", "pedalada")
                }
              />
              <span>Pedalada</span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                name="tipo"
                value="longao"
                checked={form.tipo === "longao"}
                onChange={() =>
                  handleChange("tipo", "longao")
                }
              />
              <span>Longão</span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                name="tipo"
                value="aventura"
                checked={form.tipo === "aventura"}
                onChange={() =>
                  handleChange("tipo", "aventura")
                }
              />
              <span>Aventura</span>
            </label>
          </div>
        </section>

        {/* DADOS DA ATIVIDADE */}

        <section className={styles.section}>
          <h2>Dados da atividade</h2>

          <div className={styles.grid}>
          
          {/* DATA */}

          <label className={styles.field}>
            <span>Data</span>

            <input
              type="date"
              value={form.data}
              onChange={(event) =>
                handleChange(
                  "data",
                  event.target.value
                )
              }
              required
            />
          </label>

          {/* MODALIDADE */}

          <div className={styles.field}>
            <span>Modalidade</span>

            <div className={styles.choiceGroup}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="modalidade"
                  value="mtb"
                  checked={form.modalidade === "mtb"}
                  onChange={() =>
                    handleChange("modalidade", "mtb")
                  }
                  required
                />
                <span>MTB</span>
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="modalidade"
                  value="estrada"
                  checked={form.modalidade === "estrada"}
                  onChange={() =>
                    handleChange("modalidade", "estrada")
                  }
                />
                <span>Estrada</span>
              </label>
            </div>
          </div>

            {/* TERRENO */}

            <div className={styles.field}>
              <span>Terreno</span>

              <div className={styles.choiceGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="terreno"
                    value="terra"
                    checked={form.terreno === "terra"}
                    onChange={() =>
                      handleChange(
                        "terreno",
                        "terra"
                      )
                    }
                    required
                  />

                  <span>Terra</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="terreno"
                    value="asfalto"
                    checked={
                      form.terreno === "asfalto"
                    }
                    onChange={() =>
                      handleChange(
                        "terreno",
                        "asfalto"
                      )
                    }
                  />

                  <span>Asfalto</span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="terreno"
                    value="trilha"
                    checked={form.terreno === "trilha"}
                    onChange={() =>
                      handleChange(
                        "terreno",
                        "trilha"
                      )
                    }
                  />

                  <span>Trilha</span>
                </label>
              </div>
            </div>

            {/* DISTÂNCIA */}

            <label className={styles.field}>
              <span>Distância (km)</span>

              <input
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              value={form.distancia}
              onChange={(event) =>
                handleChange(
                  "distancia",
                  event.target.value
                )
              }
              required
            />
            </label>

            {/* DURAÇÃO */}

            <label className={styles.field}>
              <span>Duração</span>

              <input
                type="time"
                step="1"
                value={form.duracao}
                onChange={(event) =>
                  handleChange(
                    "duracao",
                    event.target.value
                  )
                }
              />
            </label>

            {/* CALORIAS */}

            <label className={styles.field}>
              <span>Calorias (kcal)</span>

              <input
                type="number"
                inputMode="numeric"
                min="0"
                placeholder="0"
                value={form.calorias}
                onChange={(event) =>
                  handleChange(
                    "calorias",
                    event.target.value
                  )
                }
              />
            </label>

            {/* ELEVAÇÃO */}

            <label className={styles.field}>
              <span>Ganho de elevação (m)</span>

              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="0"
                value={form.ganhoElevacao}
                onChange={(event) =>
                  handleChange(
                    "ganhoElevacao",
                    event.target.value
                  )
                }
              />
            </label>

            {/* VELOCIDADE */}

            <label className={styles.field}>
              <span>Velocidade média (km/h)</span>

              <input
                type="text"
                inputMode="decimal"
                placeholder="0,0"
                value={form.velocidadeMedia}
                onChange={(event) =>
                  handleChange(
                    "velocidadeMedia",
                    event.target.value
                  )
                }
              />
            </label>

            {/* FC MÉDIA */}

          <label className={styles.field}>
            <span>FC média (bpm)</span>

            <input
              type="number"
              inputMode="numeric"
              min="0"
              placeholder="0"
              value={form.fcMedia}
              onChange={(event) =>
                handleChange(
                  "fcMedia",
                  event.target.value
                )
              }
            />
          </label>
          </div>
        </section>

        
        {/* DADOS DA AVENTURA */}

        {form.tipo === "aventura" && (
          <section className={styles.section}>
            <h2>Dados da aventura</h2>

            <div className={styles.grid}>

              {/* LOCAL */}

              <label className={styles.field}>
                <span>Local</span>

                <input
                  type="text"
                  placeholder="Local do pedal"
                  value={form.local}
                  onChange={(event) =>
                    handleChange(
                      "local",
                      event.target.value
                    )
                  }
                />
              </label>

              {/* NOME */}

              <label className={styles.field}>
                <span>Nome da aventura</span>

                <input
                  type="text"
                  placeholder="Nome da aventura"
                  value={form.nomeAventura}
                  onChange={(event) =>
                    handleChange(
                      "nomeAventura",
                      event.target.value
                    )
                  }
                />
              </label>

              {/* DIFICULDADE */}

              <div className={styles.field}>
                <span>Dificuldade</span>

                <div className={styles.choiceGroup}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="dificuldade"
                      value="facil"
                      checked={
                        form.dificuldade === "facil"
                      }
                      onChange={() =>
                        handleChange(
                          "dificuldade",
                          "facil"
                        )
                      }
                      required
                    />

                    <span>Fácil</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="dificuldade"
                      value="moderada"
                      checked={
                        form.dificuldade === "moderada"
                      }
                      onChange={() =>
                        handleChange(
                          "dificuldade",
                          "moderada"
                        )
                      }
                    />

                    <span>Moderada</span>
                  </label>

                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="dificuldade"
                      value="dificil"
                      checked={
                        form.dificuldade === "dificil"
                      }
                      onChange={() =>
                        handleChange(
                          "dificuldade",
                          "dificil"
                        )
                      }
                    />

                    <span>Difícil</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* AÇÕES */}

        <div className={styles.actions}>
          {mensagem && (
            <span className={styles.message}>
              {mensagem}
            </span>
          )}

          <button
            type="submit"
            className={styles.saveButton}
          >
            Salvar atividade
          </button>
        </div>
      </form>
    </main>
  );
}