FROM python:3.13

WORKDIR /app

COPY ./requirements.txt ./

RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

COPY . .

EXPOSE 8000

CMD ["fastapi", "dev", "./main.py", "--host", "0.0.0.0", "--port", "8000", "--reload"]
