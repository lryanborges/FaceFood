package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalDate;

public class RotinaSemanal {
	private Rotina[] rotina = new Rotina[7];
	private LocalDate inicio;
	public Rotina[] getRotina() {
		return rotina;
	}
	public void setRotina(Rotina[] rotina) {
		this.rotina = rotina;
	}
	public LocalDate getInicio() {
		return inicio;
	}
	public void setInicio(LocalDate inicio) {
		this.inicio = inicio;
	}
	public LocalDate getFim() {
		return fim;
	}
	public void setFim(LocalDate fim) {
		this.fim = fim;
	}
	private LocalDate fim;
}
