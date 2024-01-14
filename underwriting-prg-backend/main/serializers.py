from rest_framework import serializers

class InsuranceQuoteSerializer(serializers.Serializer):
    home_value = serializers.DecimalField(max_digits=10, decimal_places=2)
    distance_from_coast = serializers.IntegerField()
    roof_type = serializers.CharField(max_length=20)
    roof_age = serializers.IntegerField()
    prior_insurance = serializers.BooleanField()
    property_size = serializers.DecimalField(max_digits=5, decimal_places=2)
    protection_class = serializers.IntegerField()
