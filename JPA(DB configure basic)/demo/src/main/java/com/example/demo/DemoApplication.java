package com.example.demo;

import com.example.demo.Entity.User;
import com.example.demo.dao.UserRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {


	public static void main(String[] args) {

	    ApplicationContext context= SpringApplication.run(DemoApplication.class, args);
		UserRepository  userRepository=context.getBean(UserRepository.class);
		User user=new User();
		user.setName("mahi");
		user.setCity("Ramgarh");
		User result= userRepository.save(user);
		System.out.println(result);

	}

}
