package com.tinnova.desafio.infrastructure.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;

import org.springframework.stereotype.Repository;

import com.tinnova.desafio.domain.model.Veiculo;
import com.tinnova.desafio.domain.model.dto.DistribuicaoVeiculoDTO;
import com.tinnova.desafio.domain.model.dto.DistribuicaoVeiculoFabricanteDTO;
import com.tinnova.desafio.domain.service.DistribuicaoVeiculoQueryService;

@Repository
public class DistribuicaoVeiculoQueryServiceImpl implements DistribuicaoVeiculoQueryService{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<DistribuicaoVeiculoDTO> consultarDistribuicaoVeiculoPorAno() {
		var builder = entityManager.getCriteriaBuilder();
		var query   = builder.createQuery(DistribuicaoVeiculoDTO.class);
		var root    = query.from(Veiculo.class);
		
		var selection = builder.construct(DistribuicaoVeiculoDTO.class,
				root.get("ano"),
				builder.count(root.get("id")));
		
		query.select(selection);
		query.groupBy(root.get("ano"));
		
		return entityManager.createQuery(query).getResultList();
	}

	@Override
	public List<DistribuicaoVeiculoFabricanteDTO> consultarDistribuicaoVeiculoPorFabricante() {
		var builder = entityManager.getCriteriaBuilder();
		var query   = builder.createQuery(DistribuicaoVeiculoFabricanteDTO.class);
		var root    = query.from(Veiculo.class);
		
		var selection = builder.construct(DistribuicaoVeiculoFabricanteDTO.class,
				root.get("marca"),
				builder.count(root.get("id")));
		
		query.select(selection);
		query.groupBy(root.get("marca"));
		
		return entityManager.createQuery(query).getResultList();
	}
}
