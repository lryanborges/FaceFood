package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.User;

public class RefeicaoDTO {
	    private LocalTime horario;
	    private Prato prato;
		private UUID uuid;
		public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}
		private User user;
		public LocalTime getHorario() {
			return horario;
		}
		public void setHorario(LocalTime horario) {
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
