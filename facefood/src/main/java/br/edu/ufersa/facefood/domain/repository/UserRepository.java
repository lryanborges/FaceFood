package br.edu.ufersa.facefood.domain.repository;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.ufersa.facefood.domain.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{
	User findById(long id);
	User findByUuid(UUID uuid);
	User findByEmail(String email);
}
