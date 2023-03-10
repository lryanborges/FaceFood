package br.edu.ufersa.facefood.domain.repository;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.Ingrediente.TipoIngrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
	Ingrediente findByUuid(UUID uuid);
	Ingrediente findById(long id);
    Ingrediente findByNome(String nome);
    List<Ingrediente> findByTipo(TipoIngrediente tipo);
}
