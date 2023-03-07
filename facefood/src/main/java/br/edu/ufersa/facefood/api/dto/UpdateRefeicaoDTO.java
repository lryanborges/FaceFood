package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class UpdateRefeicaoDTO {
	 private LocalTime horario;
	    private List<Prato> pratos;
		private UUID uuid;
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
		public UUID getUuid() {
			return uuid;
		}
		public void setUuid(UUID uuid) {
			this.uuid = uuid;
		}
		public Rotina getRotina() {
			return rotina;
		}
		public void setRotina(Rotina rotina) {
			this.rotina = rotina;
		}
	
}
