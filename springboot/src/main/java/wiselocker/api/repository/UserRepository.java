package wiselocker.api.repository;

import wiselocker.api.entity.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel,Integer>{
    UserModel findByUserName(String username);
}
