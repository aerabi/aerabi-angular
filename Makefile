.PHONY: run_website stop_website deploy_helm_chart forward_port

run_website:
	docker build -t aerabi/aerabi.com . && docker run --rm --name aerabi.com -p 8080:80 -d aerabi.com

stop_website:
	docker stop aerabi.com

deploy_helm_chart:
	helm upgrade --debug -n aerabi-com --install --timeout 15m --atomic aerabi-com chart/

forward_port:
	bash kube-forward-port.sh
