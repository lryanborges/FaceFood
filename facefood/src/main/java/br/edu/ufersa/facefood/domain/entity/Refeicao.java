package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalTime;
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
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name="tb_refeicoes")
public class Refeicao {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private LocalTime horario;
    
    @ManyToMany
    @JoinColumn(name = "id")
    private List<Prato> pratos;
    //private Prato prato;
    
    @Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
    @ManyToOne
    @JoinColumn(name="id_rotina")
    private Rotina rotina;
    public Rotina getRotina() {
		return rotina;
	}

	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}

	public Refeicao() {
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public LocalTime getHorario() {
        return horario;
    }
    
    public void setHorario(LocalTime horario) {
        this.horario = horario;
    }
    
    public UUID getUuid() {
        return uuid;
    }
    
    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

	public List<Prato> getPratos() {
		return pratos;
	}

	public void setPratos(List<Prato> pratos) {
		this.pratos = pratos;
	}

	@Override
	public int hashCode() {
		return Objects.hash(horario, id, pratos, rotina, uuid);
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
		return Objects.equals(horario, other.horario) && Objects.equals(id, other.id)
				&& Objects.equals(pratos, other.pratos) && Objects.equals(rotina, other.rotina)
				&& Objects.equals(uuid, other.uuid);
	}

	public Refeicao(Long id, LocalTime horario, List<Prato> pratos, UUID uuid, Rotina rotina) {
		super();
		this.id = id;
		this.horario = horario;
		this.pratos = pratos;
		this.uuid = uuid;
		this.rotina = rotina;
	}
    
 
}
