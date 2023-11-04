package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, _ *http.Request) {
		// w.Header().Set("Content-Type", "application/json")
		// fmt.Fprintf(w, `{"text":"Hello, world!"}`)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		fmt.Fprintf(w, "Hello, world")
	})
	http.ListenAndServe(":9999", nil)
}
