const defaultCodePy = `#Your Code Here
  
  print("Hello World")`;
const defaultCodeJava = `//Your Code Here, class name must be test
  class test{
    public static voic main(String args[]){
      System.out.println("Hello World");
    }
  }`;
const defaultCodeC = `//Your Code Here

  #include <iostream>
  
  int main() {
      std::cout << "Hello World!";
      return 0;
  }`;
exports.defaultCodeC = defaultCodeC;
exports.defaultCodePy = defaultCodePy;
exports.defaultCodeJava = defaultCodeJava;
