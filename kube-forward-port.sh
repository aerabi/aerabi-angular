export POD_NAME=$(kubectl get pods --namespace aerabi-com -l "app.kubernetes.io/name=aerabi-com,app.kubernetes.io/instance=aerabi-com" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace aerabi-com $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8080 to use your application"
kubectl --namespace aerabi-com port-forward $POD_NAME 8080:$CONTAINER_PORT
