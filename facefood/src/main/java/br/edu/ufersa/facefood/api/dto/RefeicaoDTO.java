package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class RefeicaoDTO {
	    private LocalDateTime horario;
	    private Prato prato;
	    private Rotina rotina;
		private UUID uuid;
		
		public LocalDateTime getHorario() {
			return horario;
		}
		public void setHorario(LocalDateTime horario) {
			this.horario = horario;
		}
		public Prato getPrato() {
			return prato;
		}
		public void setPrato(Prato prato) {
			this.prato = prato;
		}
		public Rotina getRotina() {
			return rotina;
		}
		public void setRotina(Rotina rotina) {
			this.rotina = rotina;
		}
		public UUID getUuid() {
			return uuid;
		}
		public void setUuid(UUID uuid) {
			this.uuid = uuid;
		}
		
		
}
