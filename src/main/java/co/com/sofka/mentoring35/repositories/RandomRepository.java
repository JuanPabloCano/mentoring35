package co.com.sofka.mentoring35.repositories;

import co.com.sofka.mentoring35.random.Random;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {

}