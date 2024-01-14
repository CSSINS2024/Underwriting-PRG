from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import InsuranceQuoteSerializer

@api_view(['POST'])
def log_insurance_quote(request):
    serializer = InsuranceQuoteSerializer(data=request.data)

    if serializer.is_valid():
        form_data = serializer.validated_data
        
        print("Received form data:", form_data)

        return Response({"message": "Form data logged successfully."})
    else:
        return Response(serializer.errors, status=400)

