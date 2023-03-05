package br.edu.ufersa.facefood.domain.entity;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name="tb_refeicoes")
public class Refeicao {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    private LocalDateTime horario;
    
    @ManyToOne
    private Prato prato;
    
    @Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;
    
    public Refeicao() {
    }
    
    public Refeicao(LocalDateTime horario, Prato prato, UUID uuid) {
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
