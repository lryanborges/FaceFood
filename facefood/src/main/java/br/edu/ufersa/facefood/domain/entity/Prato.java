package br.edu.ufersa.facefood.domain.entity;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "tb_pratos")
public class Prato {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	@Column(nullable=false)
	private String nome;
	private float calorias;
	private String descricao;
	@ElementCollection
    private List<String> tipos;
	@ManyToMany
	@JoinColumn(name = "id")
	private List<Ingrediente> ingredientes;
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	@NotNull(message="O usuário não pode ser null!")
	private User user; // user = autor
	@Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
	
	public long getId() {
		return id;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	public String getDescricao() {
		return descricao;
	}
	public List<Ingrediente> getIngredientes() {
		return ingredientes;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public float getCalorias() {
		return calorias;
	}
	public void setCalorias(float calorias) {
		this.calorias = calorias;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public List<String> getTipos() {
		return tipos;
	}
	public void setTipos(List<String> tipos) {
		this.tipos = tipos;
	}
	public void setIngredientes(List<Ingrediente> ingredientes) {
		this.ingredientes = ingredientes;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Prato other = (Prato) obj;
		return Float.floatToIntBits(calorias) == Float.floatToIntBits(other.calorias)
				&& Objects.equals(descricao, other.descricao) && id == other.id && Objects.equals(nome, other.nome)
				&& Objects.equals(tipos, other.tipos) && Objects.equals(user, other.user)
				&& Objects.equals(uuid, other.uuid);
	}
}
