import requests

PREDICT_ENDPOINT="https://genai.katonic.ai/6503590c652894c7f83b2650/genai/gd-c7af5862-5efe-4944-86cd-9419c98f54c3/api/v1/predict"
SECURE_TOKEN="gd-c7af5862-5efe-4944-86cd-9419c98f54c3-6503590c652894c7f83b2650-healix eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NDE5Yzk4ZjU0YzMtOGVlZDA3ZWVmNDZmNDI4MmI4MWI1MDkwYjY0OTQ0N2ZrYXRvbmljIiwiZXhwIjoxNjk4NDkxMzQ3MDAwfQ.urbzZTZQ9kKqs2Pog-ZTYETcRx6J_qb-uVVuss1U7g0"



result = requests.post(PREDICT_ENDPOINT, verify=False, headers = {"Authorization":SECURE_TOKEN})

print(result.text) 