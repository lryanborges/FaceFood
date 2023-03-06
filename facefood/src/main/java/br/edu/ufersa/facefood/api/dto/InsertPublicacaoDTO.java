package br.edu.ufersa.facefood.api.dto;

import javax.validation.constraints.Size;

import br.edu.ufersa.facefood.domain.entity.Prato;

public class InsertPublicacaoDTO {

	private Prato prato;
	@Size(max=200, message="A descrição pode ter no máximo 200 caracteres!")
	private String descricao;
	
	public Prato getPrato() {
		return prato;
	}
	public void setPrato(Prato prato) {
		this.prato = prato;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}
