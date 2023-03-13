package br.edu.ufersa.facefood.domain.entity;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
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
@Table(name = "tb_pratos")
public class Prato {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	@Column(nullable=false)
	private String nome;
	private float calorias;
	private String descricao;
	@ElementCollection(fetch = FetchType.EAGER)
    private List<String> tipos;
	/* @ManyToMany
    @JoinTable(name = "rel_prato_ingrediente",
        joinColumns = @JoinColumn(name = "prato_id"),
        inverseJoinColumns = @JoinColumn(name = "ingrediente_id"))*/
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "tb_pratos_ingredientes",
				joinColumns = @JoinColumn(name = "pratos_id"),
				inverseJoinColumns = @JoinColumn(name = "ingredientes_id"))
	private Set<Ingrediente> ingredientes;
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user; // user = autor
	@Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
	private String imgUrl;
	
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
	public Set<Ingrediente> getIngredientes() {
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
	public void setIngredientes(Set<Ingrediente> ingredientes) {
		this.ingredientes = ingredientes;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
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
	public String toString() {
		String retornar = "id: " + id + "\nuuid: " + uuid + "\nnome: " + nome + "\ndescricao: " + descricao + "\ncalorias: " + calorias;
		retornar = retornar + "\nLista de ingredientes: ";
		int i = 0;
		for(Ingrediente ig : ingredientes) {
			retornar = "\nIngr" + i++ + ": " + ig; 
		}
		int j = 0;
		for(String tp : tipos) {
			retornar = "\nTipo" + j++ + tp.indexOf(j);
		}
		return retornar;
	}
	
}
