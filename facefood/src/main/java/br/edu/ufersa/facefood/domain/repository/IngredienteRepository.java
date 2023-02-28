package br.edu.ufersa.facefood.domain.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.Ingrediente.TipoIngrediente;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
    Ingrediente findByNome(String nome);
    Optional<Ingrediente> findById(Optional<Long> id);
    List<Ingrediente> findByTipo(TipoIngrediente tipo);
    
}
