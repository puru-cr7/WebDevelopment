package com.example.demo;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class Config {

	@Bean
	@Qualifier("item1")
	public Item item1() {
		return new ItemImpl1();
	}

	@Bean
	@Qualifier("item2")
	public Item item2() {
		return new ItemImpl2("non-primary");
	}

	@Bean
	@Qualifier("item2")
	@Primary
	public Item item2_new() {
		return new ItemImpl2("primary");
	}
}