package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;

public class RefeicaoDTO {
	    private LocalDateTime horario;
	    private Prato prato;
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
		public UUID getUuid() {
			return uuid;
		}
		public void setUuid(UUID uuid) {
			this.uuid = uuid;
		}
		
		
}
