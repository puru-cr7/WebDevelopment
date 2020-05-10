package com.example.demo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class ItemService {

	@Autowired
	@Qualifier("item2")
	private Item item;

	@PostConstruct
	public void init() {
		System.out.println("This is the selected item ---" + this.item.getName());
	}

}