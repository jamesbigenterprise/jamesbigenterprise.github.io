package thiago;
import java.util.Scanner;

public class CircleCalculator {
  //attributes
  private static Scanner scanner = new Scanner(System.in);
  private double radius;
  public static final double PI = Math.PI;

  //methods
  public double getRadius(){
    //prompt and save the Radius
    System.out.print("Please type the radius in double format: ");
    double radius = scanner.nextDouble();
    this.radius = radius;
    //remember to return the radius later
    return this.radius;
  }
  public void displayCircumference(double radius){
    double circumference = 2 * PI * radius;
    System.out.format("The Circumference of this Circle is %.2f%n", circumference);
  }
  public void displayArea(double radius){
    double area = PI * (radius * radius);
    System.out.format("The Area of this Circle is %.2f%n", area);
  }
}
