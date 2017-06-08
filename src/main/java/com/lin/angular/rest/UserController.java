package com.lin.angular.rest;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

	@RequestMapping("/list")
	@CrossOrigin(origins = "http://localhost:8100")
	public List<Map<String, Object>> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("firstName", UUID.randomUUID().toString());
		model.put("lastName", "Hello World");
		model.put("company", "Hello World company");
		return Arrays.asList(model);
	}

}
