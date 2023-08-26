 const schedule = require('node-schedule');

 // Executar a cada 5s, toda 22h e toda Quarta(3), '*/5 *****' para realizar a cada 5s e ignorar os params.
 const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', function() {
    console.log('Executando Tarefa1', new Date().getSeconds())
 })

 // Cancelar a tarefa1 após 20s
 setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
 }, 20000)

 // Criando uma regra para rodar de Seg à Sexta, toda 22h, e em cada *SEGUNDO 30*.
 const regra = new schedule.RecurrenceRule()
 regra.dayOfWeek = [new schedule.Range(1, 5)] // Executar de Seg(1) até Sex(5)
 regra.hour = 22
 regra.second = 30

 const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa2', new Date().getSeconds())
 })