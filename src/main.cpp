#include <Arduino.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>
#include <ESPmDNS.h>
#include <SPIFFS.h>
#include <wifi-credentials.h>

AsyncWebServer server(80);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.waitForConnectResult() != WL_CONNECTED){
    Serial.printf("Connection Failed... Re-Booting \n");
    ESP.restart();
  }
  Serial.printf("Connected to Network");
  SPIFFS.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
}