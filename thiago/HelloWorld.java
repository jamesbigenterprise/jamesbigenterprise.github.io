package thiago;

public class HelloWorld {
    public static void main(String[] args) {
	CircleCalculator calc = new CircleCalculator();
	double radius = calc.getRadius();
	calc.displayCircumference(radius);
	calc.displayArea(radius);
    }
}
