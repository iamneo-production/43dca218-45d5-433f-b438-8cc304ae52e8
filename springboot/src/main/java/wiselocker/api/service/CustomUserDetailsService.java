package wiselocker.api.service;

import org.springframework.security.core.userdetails.userDetailsService;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import wiselocker.api.repository.UserRepository;
import org.springframework.stereotype.Service;



@Service
public class CustomUserDetailsService implements userDetailsService {


    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        

        User user = repository.findByUserName(username);
        
        return new org.springframework.security.core.userdetails.User(user.getUserName, user.getPassword, new ArrayList<>());
    }

    
}
