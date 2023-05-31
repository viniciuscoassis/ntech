export const baseScript = `
#=======================================================
# NTECH NETWORK E COMUNICACAO
#
# Scrit VPN condominios Europort/Protege
#
# Versão 27-02-2023 14:24:29
# para RouterOS igual ou maior 6.47.10
#=======================================================


#============= INFORMAÇÕES IMPORTANTES =================
#
# Antes de importar o scrit restaure o equipamento para padrão de fábrica sem
# configuracao nenhuma e acesse o mesmo via MAC-Winbox e verifique se a versão
# instalada está igual ou superior a deste script.
#
# Ao terminar de instalar o script NÃO ESQUEÇA DE CONFIGURAR UMA SENHA DE ACESSO!
#
#=======================================================


#==== Configuracao de gravacao de logs ====AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
/system logging set 0 action=disk
/system logging set 1 action=disk
/system logging set 2 action=disk
/system logging set 3 action=disk

#==== Parametrizacao versão de atualizacao de firmware ====
:local updChannel long-term


#==== Configuracao de interfaces de rede ====
/interface ethernet
set [ find default-name=ether1 ] comment=WAN-1 name=ether1-wan01
set [ find default-name=ether2 ] comment=WAN-2 name=ether2-wan02
set [ find default-name=ether3 ] comment=WAN-3 disabled=yes name=ether3-wan03
set [ find default-name=ether4 ] comment=LAN name=ether4-lan
set [ find default-name=ether5 ] disabled=yes

#==== Configuracao de interfaces lists WAN e LAN ====
/interface list add comment=defconf name=WAN
/interface list add comment=defconf name=LAN

/interface list member add interface=ether4 list=LAN
/interface list member add interface=ether1 list=WAN
/interface list member add interface=ether2 list=WAN

#==== Configuracao da VPN ====
/interface l2tp-client add connect-to=protegelimeira.ddns.com.br disabled=no ipsec-secret=prtg@2206 max-mru=1480 max-mtu=1480 name=l2tp-vpn-router01-limeira password=prtg018 use-ipsec=yes user=condominio

#==== Configuracao do servidor DHCP ====
/ip pool add name=dhcp ranges=172.16.18.100-172.16.18.150
/ip dhcp-server add add-arp=yes address-pool=dhcp disabled=no interface=ether4-lan lease-time=60m name="REDE INTERNA"
/ip dhcp-server network add address=172.16.18.0/24 comment="REDE DHCP" dns-server=172.16.18.1,8.8.4.4 gateway=172.16.18.1 netmask=24

#==== Configuracao de IP das interfaces de rede ====
/ip address add address=172.16.18.1/24 interface=ether4-lan network=172.16.18.0

#==== Configuracao do cliente DHCP nas interfaces WAN ====
/ip dhcp-client add disabled=no interface=ether1-wan01
/ip dhcp-client add default-route-distance=2 disabled=no interface=ether2-wan02

#==== Configuracao servidores DNS ====
/ip dns set allow-remote-requests=yes servers=189.38.95.95,208.67.222.222,8.8.8.8

#==== Configuracao de regras de filtro de firewall ====
/ip firewall filter add action=accept chain=input comment="### Aceita conexoes e port scanner vindas do monitoramento" src-address=192.168.100.0/24
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="Port scanners to list" protocol=tcp psd=21,3s,3,1
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="NMAP FIN Stealth scan" protocol=tcp tcp-flags=fin,!syn,!rst,!psh,!ack,!urg
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="SYN/FIN scan" protocol=tcp tcp-flags=fin,syn
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="SYN/RST scan" protocol=tcp tcp-flags=syn,rst
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="FIN/PSH/URG scan" protocol=tcp tcp-flags=fin,psh,urg,!syn,!rst,!ack
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="ALL/ALL scan" protocol=tcp tcp-flags=fin,syn,rst,psh,ack,urg
/ip firewall filter add action=add-src-to-address-list address-list="port scanners" address-list-timeout=2w chain=input comment="NMAP NULL scan" protocol=tcp tcp-flags=!fin,!syn,!rst,!psh,!ack,!urg
/ip firewall filter add action=drop chain=input comment="### DROP port scanners" src-address-list="port scanners"
/ip firewall filter add action=drop chain=input comment="### DROP ftp brute forcers" dst-port=3221 protocol=tcp src-address-list=ftp_blacklist
/ip firewall filter add chain=output content="530 Login incorrect" dst-limit=1/1m,7,dst-address/1m protocol=tcp
/ip firewall filter add action=add-dst-to-address-list address-list=ftp_blacklist address-list-timeout=3h chain=output content="530 Login incorrect" protocol=tcp
/ip firewall filter add action=drop chain=input comment="### DROP ssh brute forcers" dst-port=3222 protocol=tcp src-address-list=ssh_blacklist
/ip firewall filter add action=add-src-to-address-list address-list=ssh_blacklist address-list-timeout=1w3d chain=input connection-state=new dst-port=3222 protocol=tcp src-address-list=ssh_stage3
/ip firewall filter add action=add-src-to-address-list address-list=ssh_stage3 address-list-timeout=1m chain=input connection-state=new dst-port=3222 protocol=tcp src-address-list=ssh_stage2
/ip firewall filter add action=add-src-to-address-list address-list=ssh_stage2 address-list-timeout=1m chain=input connection-state=new dst-port=3222 protocol=tcp src-address-list=ssh_stage1
/ip firewall filter add action=drop chain=forward comment="### DROP ssh brute downstream" dst-port=22 protocol=tcp src-address-list=ssh_blacklist
/ip firewall filter add action=accept chain=input comment="Aceitra 50 pacotes ICMP por segundos" limit=50,5:packet protocol=icmp
/ip firewall filter add action=drop chain=input comment="Drop pacotes ICMP excedentes" protocol=icmp

#==== Configuracao de NAT ====
/ip firewall nat add action=masquerade chain=srcnat comment="masquerade" out-interface-list=WAN

#==== Configuracao NAT Helper ====
/ip firewall service-port set sip disabled=yes

#==== Configuracao de rotas estaticas ====
/ip route add distance=1 dst-address=192.168.100.0/24 gateway=l2tp-vpn-router01-limeira

#==== Configuracao de porta dos serviços ====
/ip service set telnet disabled=yes
/ip service set ftp disabled=yes
/ip service set www address=192.168.100.0/24,172.16.0.0/12 port=3280
/ip service set ssh address=192.168.100.0/24,172.16.0.0/12 disabled=yes port=3222
/ip service set api address=192.168.100.0/24 port=3728
/ip service set winbox address=192.168.100.0/24,172.16.0.0/12 port=3291
/ip service set api-ssl disabled=yes

#==== Configuracao dos servicos SNMP ====
/snmp community set [ find default=yes ] addresses=192.168.100.0/24 read-access=no
/snmp community add addresses=192.168.100.0/24 name=protege
/snmp set enabled=yes trap-community=protege trap-version=2
/system clock set time-zone-name=America/Sao_Paulo
/system identity set name="condominio"

#==== Configuracao de notas de configuracao ====
/system note set note=" ############## NTECH NETWORK ############## \r\ \n\r\ \nTelefone: 19 3500-6979\r\ \nTelefone: 19 3500-6979\r\ \nSite: www.ntechnetwork.com.br\r\ \n\r\ \n########################################\r\ \n\r\ \nRoteador configurado em $[/system clock get date] as $[/system clock get time]"

#==== Configuracao de servico NTP ====
/system ntp client set enabled=yes primary-ntp=200.160.7.186 secondary-ntp=201.49.148.135

#==== Configuracao de pacotes e update ====
/system package update set channel=long-term
/system package disable hotspot
/system package disable ipv6
/system package disable mpls
/system package disable wireless

#==== Configuracao dos scripts ====
/system script add dont-require-permissions=no name=DDNS owner=admin policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive source="/ip cloud force-update"
/system script add dont-require-permissions=no name=renova-connsip owner=ntech policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive source=":local IpPortVoip 192.168.100.210:5060 \n /ip firewall connection remove [/ip firewall connection find dst-address=\$IpPortVoip] \n :log warning \"Renovada a conexoes SIP para o IP \$IpPortVoip\""
/system script add dont-require-permissions=no name=EnviaBackupPorEmail owner=ntech policy=ftp,read,write,policy,test,sensitive source=":log info Inciando backup \n :delay 5s \n /system backup save name=backup_configuracao \n :log info Enviando backup por email \n :delay 5s \n /tool e-mail send file=backup_configuracao.backup to=suporte@ntechnetwork.com.br body=Backup realizado do equipamento - \$[/system identityn get name] \n Data: \$[/system clock get date] \n Hora: \$[/system clock get time] subject=Backup realizado \$[/system identity get name] \$[/system clock get time] \$[/system clock get date] \n: log info Enviado com sucesso!"

#==== Configuracao das tarefas agendas de scripts ====
/system scheduler add interval=5m name=DDNS on-event=DDNS policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive start-time=startup
/system schedAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuler add disabled=yes interval=4w2d name=EnviaBackupEmail on-event=EnviaBackupPorEmail policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive start-time=startup
/system scheduler add interval=15m name=renova-connsip on-event=renova-connsip policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive,romon start-time=startup
/tool e-mail set address=mail.ntechnetwork.com.br from=protege@ntechnetwork.com.br password=2206@2206 port=465 start-tls=tls-only user=protege@ntechnetwork.com.br

#==== Configuracao de logs de graficos das interfaces ====
/tool graphing interface add interface=ether1-wan01
/tool graphing interface add interface=ether4-lan

#==== Configuracao do usuário de acesso. Criar as senha ao fim da configuração. ====
/user add address=192.168.100.0/24,172.16.0.0/24 group=full name=suporteti
/user add address=192.168.100.0/24 group=full name=api-ntech
/user add group=full name=ntech
/user set admin disabled=yes
#==== Configuracoes aplicadas. Reiniciando equipamento e 5 segundos. ====
/delay 5s
/system reboot
/
`