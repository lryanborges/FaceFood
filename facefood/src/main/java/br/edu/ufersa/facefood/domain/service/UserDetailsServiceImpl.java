package br.edu.ufersa.facefood.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Admin;
import br.edu.ufersa.facefood.domain.entity.User;
import br.edu.ufersa.facefood.domain.repository.AdminRepository;
import br.edu.ufersa.facefood.domain.repository.UserRepository;

@Service
public class UserDetailsServiceImpl  implements UserDetailsService{
	@Autowired
	private UserRepository repository;
	@Autowired
	private AdminRepository adminRep;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
	{
		User currentUser = repository.findByEmail(email);
		Admin currentAdmin = adminRep.findByEmail(email);
		String passw = "";

	    // Cria uma lista de GrantedAuthority para as roles do usuário
	    List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
	    if(currentUser != null) {
	    	roles.add(new SimpleGrantedAuthority("USER")); // Role "USER" é atribuída a todos os usuários
		    passw = currentUser.getSenha();
	    }
	    if (currentAdmin != null) {
	        roles.add(new SimpleGrantedAuthority("ADMIN")); // Se o usuário for administrador, adiciona a role "ADMIN"
	        passw = currentAdmin.getSenha();
	    }

		UserDetails user = new org.springframework.security.core
		          .userdetails.User(email, passw, true, true, true, true, roles);
		return user;
	}


}