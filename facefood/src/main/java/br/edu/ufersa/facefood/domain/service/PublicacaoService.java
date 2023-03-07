package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Publicacao;
import br.edu.ufersa.facefood.domain.repository.PublicacaoRepository;

@Service
public class PublicacaoService {

	@Autowired
	private PublicacaoRepository publicacaoRep;
	@Autowired
	private PratoService pratoService;
	
	public List<Publicacao> getAll() {
		List<Publicacao> publicacoes = publicacaoRep.findAll();
		return publicacoes;
	}
	
	public Publicacao getById(long id) {
		Publicacao publicacao = publicacaoRep.findById(id);
		return publicacao;
	}
	
	public Publicacao createPublicacao(Publicacao publicacao) {
		publicacao.setUuid(UUID.randomUUID());
		publicacao.setPrato(pratoService.getById(publicacao.getPrato().getId()));
		Publicacao saved = publicacaoRep.save(publicacao);
		return saved;
	}
	
	public Publicacao updatePublicacao(Publicacao publicacao) {
		Publicacao publicacaoData = publicacaoRep.findByUuid(publicacao.getUuid());
		publicacao.setId(publicacaoData.getId());
		Publicacao publicacaoUpdated = publicacaoRep.save(publicacao);
		return publicacaoUpdated;
	}
	
	public Publicacao updatePublicacaoPatch(Publicacao publicacao) {
		Publicacao publicacaoData = publicacaoRep.findByDescricao(publicacao.getDescricao());
		publicacao.setId(publicacaoData.getId());
		publicacao.setUuid(publicacaoData.getUuid());
		Publicacao publicacaoUpdated = publicacaoRep.save(publicacao);
		return publicacaoUpdated;
	}
	
	public String deletePublicacao(long id) {
		Publicacao publicacaoDelete = publicacaoRep.findById(id);
		if(publicacaoDelete == null) {
			return "publicação não foi encontrada";
		} else {
			publicacaoRep.delete(publicacaoDelete);
			return "ok";
		}
	}
	
}
