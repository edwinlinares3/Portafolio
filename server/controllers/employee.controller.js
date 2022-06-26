const router = require("../routes/employee.routes");
const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees);

}

employeeCtrl.createEmployees = async (req, res) =>{
    const employee = new Employee (req.body);
    /*console.log(employee);*/
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });

};

employeeCtrl.getEmployee = async (req, res) =>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
    
};

employeeCtrl.editEmployee = async (req, res) =>{
    const {id} =req.params;
    const employee = {
        name: req.body.name,
        posotion: req.body.position,
        office: req.body.oficce,
        salary: req.body.salary,
    };
    await Employee.findByIdAndUpdate(id,{$set:employee}, {new: true});
    res.json({status:'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res) =>{
    await Employee.findByIdAndRemove(req,params.id);
    res.json({status: 'Employee Deleted'});
    
};

module.exports = employeeCtrl;