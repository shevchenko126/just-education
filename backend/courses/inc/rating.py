from django.db import models
from django.utils.functional import cached_property
from django.core import validators


class RatingField(models.DecimalField):
    description = 'Rating field is 1.0 to 5.0 (with one decimal sign)'

    def __init__(self, *args, **kwargs):
        kwargs['max_digits'] = 2
        kwargs['decimal_places'] = 1
        super().__init__(*args, **kwargs)

    @cached_property
    def validators(self):
        return super().validators + [
            validators.MinValueValidator(1),
            validators.MaxValueValidator(5),
        ]
