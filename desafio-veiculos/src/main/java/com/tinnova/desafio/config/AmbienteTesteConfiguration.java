package com.tinnova.desafio.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.tinnova.desafio.domain.model.Veiculo;
import com.tinnova.desafio.domain.repository.VeiculoRepository;

@Configuration
@Profile("teste")
public class AmbienteTesteConfiguration {

	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@Bean
	public void startDB() {
		Veiculo polo = Veiculo.builder()
				.veiculo("Polo")
				.ano(2019)
				.marca("Volksvagen")
				.descricao("Tecnologia, segurança, conforto e performance que só um Volkswagen oferece.")
				.vendido(false).build();
		
		Veiculo nivus = Veiculo.builder()
				.veiculo("Nivus")
				.ano(2019)
				.marca("Volksvagen")
				.descricao("Lindo, Versátil, Moderno e Conectado.")
				.vendido(false).build();
		
		Veiculo onix = Veiculo.builder()
				.veiculo("Onix LT")
				.ano(2022)
				.marca("Chevrolet")
				.descricao("Lindo, Versátil, Moderno e Conectado.")
				.vendido(false).build();
		
		
		Veiculo onixPlus = Veiculo.builder()
				.veiculo("onix plus PREMIER")
				.ano(2022)
				.marca("Chevrolet")
				.descricao("Lindo, Versátil, Moderno e Conectado.")
				.vendido(false).build();
		
		Veiculo gol = Veiculo.builder()
				.veiculo("Gol")
				.ano(2021)
				.marca("Volkswagen")
				.descricao("Lançado em 1980, como herdeiro do icônico Fusca, a partir de 1990..")
				.vendido(false).build();
		
		Veiculo hb20 = Veiculo.builder()
				.veiculo("HB20")
				.ano(2018)
				.marca("Hyundai")
				.descricao("Lançado no Brasil em 2012, o hatch compacto Hyundai HB20 ganhou uma segunda geração em 2019..")
				.vendido(false).build();
		
		veiculoRepository.saveAll(List.of(polo, nivus, onix, onixPlus, gol, hb20));
	}
}
