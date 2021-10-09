const defaultCodePy = `#Your Code Here
  
print("Hello World!")`;
const defaultCodeJava = `//Your Code Here, class name must be test
class test{
  public static void main(String args[]){
    System.out.println("Hello World!");
  }
}`;
const defaultCodeC = `//Your Code Here

#include <iostream>
int main() {
    std::cout << "Hello World!";
    return 0;
}`;
const defaultCodeGo = `//Your code here 


package main


import "fmt"

func main() {
    fmt.Println("Hello World!")
}`;
exports.defaultCodeC = defaultCodeC;
exports.defaultCodeGo = defaultCodeGo;
exports.defaultCodePy = defaultCodePy;
exports.defaultCodeJava = defaultCodeJava;
