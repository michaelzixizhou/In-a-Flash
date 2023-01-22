# Generated by Django 4.1.5 on 2023-01-22 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IAFApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='deck',
            name='author',
            field=models.CharField(default='anonymous', max_length=500),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='deck',
            name='location',
            field=models.CharField(default='anonymous', max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='author',
            name='decks',
            field=models.ManyToManyField(related_name='+', to='IAFApp.deck'),
        ),
        migrations.AlterField(
            model_name='author',
            name='name',
            field=models.CharField(default='anonymous', max_length=500),
        ),
    ]
