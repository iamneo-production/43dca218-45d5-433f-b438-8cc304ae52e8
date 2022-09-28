package wiselocker.codejava;

import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository<UserModel, Integer> {
	
}
