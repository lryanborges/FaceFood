package br.edu.ufersa.facefood.domain.entity;

import java.util.Objects;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "tb_ingredientes")
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
	@Column(updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
	@Type(type = "uuid-char")
	private UUID uuid;

    @Column(unique=true, nullable=false)
    private String nome;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoIngrediente tipo;

    @Column(nullable = false)
    private float calorias;

    public Ingrediente() {
    }
    
    public Ingrediente(UUID uuid, String nome, TipoIngrediente tipo, float calorias) {
		this.uuid = uuid;
		this.nome = nome;
		this.tipo = tipo;
		this.calorias = calorias;
	}



	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}

	public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public TipoIngrediente getTipo() {
        return tipo;
    }

    public void setTipo(TipoIngrediente tipo) {
        this.tipo = tipo;
    }

    public float getCalorias() {
        return calorias;
    }

    public void setCalorias(float calorias) {
        this.calorias = calorias;
    }

    @Override
    public int hashCode() {
        return Objects.hash(calorias, id, nome, tipo, uuid);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Ingrediente other = (Ingrediente) obj;
        return Float.floatToIntBits(calorias) == Float.floatToIntBits(other.calorias) && Objects.equals(id, other.id)
                && Objects.equals(nome, other.nome) && tipo == other.tipo;
    }

    public enum TipoIngrediente {
    	CARNES, PEIXES, FRUTOS_DO_MAR, VEGETAIS, GRÃOS, CEREAIS, FRUTAS, LATICÍNIOS, TEMPEROS, ERVAS, ÓLEOS_E_GORDURAS, NOZES_E_SEMENTES, MASSAS, DOCES_E_SOBREMESAS, BEBIDAS
    }

}
