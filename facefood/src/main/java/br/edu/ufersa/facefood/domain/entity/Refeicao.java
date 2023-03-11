package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
/*
 * Algumas versões:
 *    @ManyToOne
@JoinColumn(name = "prato_id", referencedColumnName = "id")
private Prato prato;

/*@ManyToMany
@JoinColumn(name = "id")
private List<Prato> pratos;
//private Prato prato; VERSÃO DE JOVIT. TESTAR DEPOIS
 * 
 *  @ManyToOne
    @JoinColumn(name="id_rotina", referencedColumnName = "id")
    private Rotina rotina;
    public Rotina getRotina() {
		return rotina;
	}

	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}

 */

@Entity
@Table(name="tb_refeicoes")
public class Refeicao {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private long id;
	 
	@Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
    
    @Column(unique = true, nullable = false)
    private LocalTime horario;
    
    @ManyToMany
    @JoinColumn(name = "id")
    private List<Prato> pratos = new ArrayList<Prato>();    
    
    @ManyToOne
    @JoinColumn(name="id_rotina", referencedColumnName = "id")
    private Rotina rotina;
    
	public Rotina getRotina() {
		return rotina;
	}

	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}

	public Refeicao() {
    }
	
	public Refeicao(UUID uuid, LocalTime horario, List<Prato> pratos) {
		this.uuid = uuid;
		this.horario = horario;
		this.pratos = pratos;
	}

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

	@Override
	public int hashCode() {
		return Objects.hash(horario, id, pratos, uuid);
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
				&& Objects.equals(uuid, other.uuid);
	}	
	
	
}
