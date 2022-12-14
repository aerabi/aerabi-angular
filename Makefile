.PHONY: run_website stop_website

run_website:
	docker build -t aerabi/aerabi.com . && docker run --rm --name aerabi.com -p 8080:80 -d aerabi.com

stop_website:
	docker stop aerabi.com
