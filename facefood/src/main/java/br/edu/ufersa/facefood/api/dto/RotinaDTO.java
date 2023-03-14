package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Refeicao;

public class RotinaDTO {
	private List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
	private LocalDate data;
	private UUID uuid;
	public List<Refeicao> getListaRefeicoes() {
		return listaRefeicoes;
	}
	public void setListaRefeicoes(List<Refeicao> listaRefeicoes) {
		this.listaRefeicoes = listaRefeicoes;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
}