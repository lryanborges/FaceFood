package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class InsertRefeicaoDTO {
	@NotNull(message = "O horario não pode ser vazio")
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime horario;
    @NotEmpty(message = "Adicione pelo menos 1 prato")
    @Valid
    private List<Prato> pratos = new ArrayList<Prato>();   

    @NotNull(message="Adicione alguma rotina")
    private Rotina rotina;
	
	public LocalTime getHorario() {
		return horario;
	}
	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}
	public List<Prato> getPratos() {
		return pratos;
	}
	public void setPratos(List<Prato> pratos) {
		this.pratos = pratos;
	}
	public Rotina getRotina() {
		return rotina;
	}
	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}
}
