package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalTime;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
    
    @ManyToOne
    private Prato prato;
    
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
    
    public Refeicao(LocalTime horario, Prato prato, UUID uuid) {
        this.horario = horario;
        this.prato = prato;
        this.uuid = uuid;
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
    
    @Override
	public int hashCode() {
    	return Objects.hash(id, horario, prato, uuid);
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
        return Objects.equals(id, other.id) &&
               Objects.equals(horario, other.horario) &&
               Objects.equals(prato, other.prato) &&
               Objects.equals(uuid, other.uuid);
    }
}
