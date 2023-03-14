package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalTime;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name="tb_refeicoes")
public class Refeicao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	 
	@Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
	
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;
    

    @Column(unique = true, nullable = false)
    private LocalTime horario;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "tb_refeicoes_pratos", joinColumns = @JoinColumn(name = "refeicoes_id"), inverseJoinColumns = @JoinColumn(name = "pratos_id"))
    private Set<Prato> pratos; 
    
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalTime getHorario() {
		return horario;
	}

	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}

	public Set<Prato> getPratos() {
		return pratos;
	}

	public void setPratos(Set<Prato> pratos) {
		this.pratos = pratos;
	}

	@Override
	public int hashCode() {
		return Objects.hash(horario, id, pratos, user, uuid);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Refeicao other = (Refeicao) obj;
		return Objects.equals(horario, other.horario) && id == other.id && Objects.equals(pratos, other.pratos)
				&& Objects.equals(user, other.user)
				&& Objects.equals(uuid, other.uuid);
	}

	@Override
	public String toString() {
		return "Refeicao [id=" + id + ", uuid=" + uuid + ", user=" + user + ", horario=" + horario + ", pratos="
				+ pratos + ", rotina=" + "]";
	}

	public Refeicao(long id, UUID uuid, User user, LocalTime horario, Set<Prato> pratos, Rotina rotina) {
		this.id = id;
		this.uuid = uuid;
		this.user = user;
		this.horario = horario;
		this.pratos = pratos;
	}

	Refeicao(){}
}