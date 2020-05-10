1. This project demonstrates, how one can use Autowiring with @Bean Annotation for dependency injection
2. This also shows how to use @Primary for ambiguous scenarios
3. @Component annotation creates one bean per class whereas with @bean you can create multiple beans of same class explicitly


NOTES

@Component Preferable for component scanning and automatic wiring.

Sometimes automatic configuration is not an option. 
When? Let's imagine that you want to wire components from 3rd-party libraries 
(you don't have the source code so you can't annotate its classes with @Component), 
so automatic configuration is not possible.

The @Bean annotation returns an object that spring should register as bean in application context. 
The body of the method bears the logic responsible for creating the instance.